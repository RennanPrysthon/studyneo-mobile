import React, { useState, useEffect } from 'react';

import { useRoute, RouteProp } from '@react-navigation/native';

import api from '~/api';

import QuestionDetail, { Question } from '../QuestionDetail';

import Controllers from '~/components/Controllers';

type ParamsList = {
  ID: {
    id: number;
  }
}
const QuestionList: React.FC = () => {

  const { params } = useRoute<RouteProp<ParamsList, 'ID'>>();
  const { id } = params;

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    (async () => {
      if (loading) return;
      setLoading(true);
      try {
        const response = await api.get(`questions/${id}?page=${page}&perPage=1`)
        setLastPage(response.data.lastPage);
        const question_id = response.data.data[0].id;
        const { data } = await api.get(`questions/view/${question_id}`);
        setQuestion(data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [page])

  return (
    <>
      <Controllers page={page} prev={() => setPage(p => p === 1 ? p : p - 1)} next={() => setPage(p => p === lastPage ? p : p + 1)} />
      {question && <QuestionDetail id={question.id} refreshing={loading} />}
    </>
  )
}

export default QuestionList;
