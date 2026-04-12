import React from 'react';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useGetMessagesQuery, useMarkMessageReadMutation, useDeleteMessageMutation } from '../../store/api/adminEndpoints';

const Messages = () => {
    const { data: messages = [], isLoading: loading } = useGetMessagesQuery();
    const [markMessageRead] = useMarkMessageReadMutation();
    const [deleteMessage] = useDeleteMessageMutation();

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this message?')) return;

        try {
            await deleteMessage(id).unwrap();
            toast.success('Message deleted');
        } catch (error) {
            toast.error('Failed to delete message');
        }
    };

    const handleMarkRead = async (id) => {
        try {
            await markMessageRead(id).unwrap();
            toast.success('Marked as read');
        } catch (error) {
            toast.error('Failed to update status');
        }
    };

    if (loading) return <div className="p-8 text-center">Loading messages...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">User Messages</h1>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {messages.length} Total
                </span>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium text-sm">
                                <th className="p-4">Status</th>
                                <th className="p-4">Sender</th>
                                <th className="p-4">Subject</th>
                                <th className="p-4">Message</th>
                                <th className="p-4">Date</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {messages.map((msg) => (
                                <tr key={msg._id} className={`hover:bg-gray-50 transition-colors ${msg.status === 'unread' ? 'bg-blue-50/30' : ''}`}>
                                    <td className="p-4">
                                        {msg.status === 'unread' ? (
                                            <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full" title="Unread"></span>
                                        ) : (
                                            <span className="inline-block w-2.5 h-2.5 bg-gray-300 rounded-full" title="Read"></span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium text-gray-900">{msg.name}</div>
                                        <div className="text-xs text-gray-500">{msg.email}</div>
                                    </td>
                                    <td className="p-4 font-medium text-gray-800 max-w-xs truncate">
                                        {msg.subject}
                                    </td>
                                    <td className="p-4 max-w-sm">
                                        <p className="text-sm text-gray-600 line-clamp-2" title={msg.message}>
                                            {msg.message}
                                        </p>
                                    </td>
                                    <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                                        {msg.createdAt ? format(new Date(msg.createdAt), 'dd MMM yyyy') : '-'}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {msg.status === 'unread' && (
                                                <button
                                                    onClick={() => handleMarkRead(msg._id)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Mark as Read"
                                                >
                                                    ✓
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleDelete(msg._id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {messages.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        <div className="text-4xl mb-3">📭</div>
                        <p>No messages found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messages;
