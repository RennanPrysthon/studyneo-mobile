import api from '.';

interface Matter {
  id: number;
  area_id: number;
  title: string;
}

interface Area {
  id: number;
  title: string;
  matters: Matter[];
}
const getAreas = async () => {
  const response = await api.get<Area[]>('areas');
  return response.data;
};

export {
  getAreas,
};
