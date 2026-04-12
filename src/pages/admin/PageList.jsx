import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAdminPagesQuery } from '../../store/api/adminEndpoints';
import Loader from '../../components/Loader';

const PageList = () => {
    const { data: pages = [], isLoading: loading } = useGetAdminPagesQuery();

    if (loading) return <Loader text="Loading pages..." className="p-8" />;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Pages</h1>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600">Page Title</th>
                            <th className="p-4 font-semibold text-gray-600">Last Updated</th>
                            <th className="p-4 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map((page) => (
                            <tr key={page._id} className="border-b border-gray-50 hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-800">{page.title}</td>
                                <td className="p-4 text-gray-600">
                                    {new Date(page.updatedAt).toLocaleDateString()}
                                </td>
                                <td className="p-4">
                                    <Link
                                        to={`/admin/pages/edit/${page.slug}`}
                                        className="text-blue-600 hover:text-blue-800 font-medium text-sm border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        Edit Content
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PageList;
