import React, { useState, useReducer, useEffect, useCallback } from 'react';
import api from '../services/api';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export type Paginated<S> = {
  page: number;
  total: number;
  perPage: number;
  lastPage: number;
  data: S[];
}

const INITIAL_STATE: Paginated<any> = {
  page: 1,
  total: 0,
  perPage: 0,
  lastPage: 1,
  data: [],
}

function reducer(state: Paginated<any>, action: any): Paginated<any> {
  switch (action.type) {
    case 'increment':
      return { ...state, page: state.page + 1 };
    case 'addData':
      return { ...state, data: [...state.data, ...action.data] }
    case 'refresh':
      return { ...state, data: action.data }
    case 'reset': (
      { ...state, page: 1 }
    )
    default:
      return INITIAL_STATE;
  }
}

function usePagination<S>(url: string, value = INITIAL_STATE) {
  const [state, dispatch] = useReducer(reducer, value);
  const [loading, setLoading] = useState<Boolean>(false);
  const { page, lastPage, data } = state;

  useEffect(() => {

    (async () => {
      setLoading(true);
      console.log('load data')
      try {
        const { data } = await api.get<Paginated<S>>(`${url}?page=${page}`);
        if (page === 1) {
          dispatch({ type: 'addData', data: data.data });
        }
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    })();

  }, [page])

  const loadMore = useCallback(() => {
    if (page >= lastPage) return;
    console.log('loadMore called')
    dispatch({ type: 'increment' })
  }, [page]);

  const refresh = useCallback(() => {

    dispatch({ type: 'reset' })

  }, [])

  return { loading, page, loadMore, refresh, data };
}

const ExampleWithCustomHook = () => {
  const { loadMore, data, refresh } = usePagination('questions');

  useEffect(() => {
    refresh()
  }, [])

  console.log(data)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => loadMore()}>
        <Text>
          Carregar mais
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => refresh()}>
        <Text>
          Recarregar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5981f4',
    padding: 20,
  },
})

export default ExampleWithCustomHook;
