import React, { useState, useEffect, useContext, useCallback } from 'react';

import { createContext } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import api from '~/api';
import Resume from '.';
import Loading from '~/components/Loading';

interface OverviewContextData {
  resume: Resume;
  resumes: Resume[];
  loading: boolean;
  selectId: (id: number) => void;
}

type ParamsList = {
  ID: {
    id: number;
    title: string;
  }
}

const OverviewContext = createContext<OverviewContextData>({} as OverviewContextData);

export const OverviewProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [resumes, setResumes] = useState<Resume[]>([{}] as Resume[]);
  const [resume, setResume] = useState<Resume>({} as Resume);
  const { params } = useRoute<RouteProp<ParamsList, 'ID'>>();
  const { id } = params;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`overviews/${id}`);
        setResumes(data.data)
        setResume(data.data[0])
        console.log(data.data[0])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  if (loading) return <Loading />

  function selectId(id: number) {
    setLoading(true);
    const selected = resumes.filter(p => (p.id === id));
    setResume(selected[0])
    setLoading(false);
  }

  return (
    <OverviewContext.Provider value={{ resume, resumes, loading, selectId }}>
      {children}
    </OverviewContext.Provider>
  );
};

export default OverviewContext;
