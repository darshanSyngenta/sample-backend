import { request } from 'api/api';
import { useQuery } from 'react-query';
interface IParams {
  name?: string;
}

const usersData = [
  {
    key: '0',
    name: 'Rohit Group',
    id: '001',
    role: 'Default',
    mobileNumber: '+91 9975580530',
  },
  {
    key: '1',
    name: 'Anand Group',
    id: '002',
    role: 'Default',
    mobileNumber: '+91 9975580530',
  },
  {
    key: '3',
    name: 'Babu Group',
    id: '003',
    role: 'Default',
    mobileNumber: '+91 9975580530',
  },
];

const userService = (function () {
  const currentUser = async () => {
    const res = await request.get('/v2/accounts/me');
    return res.data;
  };

  const useAllRegistered = (searchQuery: any) => {
    const params: IParams = {};
    if ('searchInputValue' in searchQuery && searchQuery.searchInputValue !== '') {
      params.name = searchQuery.searchInputValue;
    }
    return useQuery(`useAllRegistered`, () => usersData);
  };

  const useAllPendingusers = (searchQuery: any) => {
    const params: IParams = {};
    if ('searchInputValue' in searchQuery && searchQuery.searchInputValue !== '') {
      params.name = searchQuery.searchInputValue;
    }
    return useQuery(`useAllPending`, () => usersData);
  };

  return {
    currentUser,
    useAllRegistered,
    useAllPendingusers,
  };
})();

export default userService;
