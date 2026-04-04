import React, { useState } from 'react';
import { Users, UserPlus, Activity, BarChart3, Eye, Plus, Settings } from 'lucide-react';

const AdminDashboard = ({ user, onNavigate }) => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showCreateModerator, setShowCreateModerator] = useState(false);

  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users },
    { label: 'Active Moderators', value: '12', icon: UserPlus },
    { label: 'Tests Conducted', value: '2,456', icon: Activity },
    { label: 'Success Rate', value: '85%', icon: BarChart3 }
  ];

  const moderators = [
    { name: 'John Doe', email: 'john@placeprep.com', status: 'Active', testsCreated: 45, lastActive: '2025-01-15' },
    { name: 'Jane Smith', email: 'jane@placeprep.com', status: 'Active', testsCreated: 32, lastActive: '2025-01-14' },
    { name: 'Mike Johnson', email: 'mike@placeprep.com', status: 'Inactive', testsCreated: 28, lastActive: '2025-01-10' }
  ];

  const userActivities = [
    { user: 'Alice Brown', action: 'Completed DSA Test', score: 85, timestamp: '2025-01-15 10:30' },
    { user: 'Bob Wilson', action: 'Started Aptitude Test', score: null, timestamp: '2025-01-15 10:15' },
    { user: 'Carol Davis', action: 'Joined Contest', score: 92, timestamp: '2025-01-15 09:45' }
  ];

  const CreateModeratorForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-sm p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Create New Moderator</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter moderator name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Aptitude</option>
              <option>Technical</option>
              <option>DSA</option>
              <option>All</option>
            </select>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowCreateModerator(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-black text-white rounded-sm hover:bg-gray-800"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'moderators', label: 'Moderators' },
    { id: 'users', label: 'User Analytics' },
    { id: 'logs', label: 'Activity Logs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage moderators and monitor system performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Recent Activities</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {userActivities.map((activity, index) => (
                  <div key={index} className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.timestamp}</p>
                      </div>
                      {activity.score && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {activity.score}%
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">System Health</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span>Server Status</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Database</span>
                  <span className="text-green-600">Healthy</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Sessions</span>
                  <span>247</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span>150ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'moderators' && (
          <div className="bg-white rounded-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Moderators</h2>
              <button
                onClick={() => setShowCreateModerator(true)}
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800"
              >
                <Plus className="w-4 h-4" />
                <span>Create Moderator</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tests Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Active
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {moderators.map((moderator, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{moderator.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{moderator.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded ${
                          moderator.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {moderator.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>{moderator.testsCreated}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{moderator.lastActive}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-gray-600 hover:text-black mr-3">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-black mr-3">
                          <Settings className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-red-600">
                          <Plus className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'users' && (
          <div className="bg-white rounded-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">User Analytics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userActivities.map((activity, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{activity.user}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{activity.action}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {activity.score !== null ? (
                          <span className={`px-2 py-1 text-xs rounded ${
                            activity.score >= 85 ? 'bg-green-100 text-green-800' :
                            activity.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {activity.score}%
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{activity.timestamp}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'logs' && (
          <div className="bg-white rounded-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Activity Logs</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userActivities.map((activity, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{activity.user}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{activity.action}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-600">{activity.timestamp}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showCreateModerator && <CreateModeratorForm />}
    </div>
  );
};

export default AdminDashboard;
