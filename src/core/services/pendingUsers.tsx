// import { request } from 'api/api';

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

const pendingUsersService = (function () {
  const allPendingUsers = async () => {
    return usersData;
  };

  return {
    allPendingUsers,
  };
})();

export default pendingUsersService;
