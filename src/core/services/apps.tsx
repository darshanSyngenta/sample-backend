import { request } from 'api/api';
import { useQuery } from 'react-query';

const appService = (function () {
  const useApps = () => {
    return useQuery('apps', () => request.get('/v2/apps').then((res) => res.data));
  };

  const useGetAppById = (id: string) => {
    return useQuery(`apps/${id}`, () => request.get(`/v2/apps/${id}`).then((res) => res.data));
  };

  return {
    useApps,
    useGetAppById,
  };
})();

export default appService;
