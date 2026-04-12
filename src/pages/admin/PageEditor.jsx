import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetPageBySlugQuery } from '../../store/api/publicEndpoints';
import { useUpdatePageMutation } from '../../store/api/adminEndpoints';

const PageEditor = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const { data: page, isLoading: loading } = useGetPageBySlugQuery(slug);
    const [updatePage] = useUpdatePageMutation();

    useEffect(() => {
        if (page) {
            setContent(page.content);
        }
    }, [page]);

    const handleSave = async () => {
        try {
            await updatePage({ slug, content }).unwrap();
            toast.success('Page updated successfully!');
            navigate('/admin/pages');
        } catch (error) {
            toast.error('Failed to update page');
        }
    };

    if (loading) return <div className="p-8">Loading editor...</div>;

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Edit Page: {page?.title}</h1>
                    <p className="text-sm text-gray-500 mt-1">/{slug}</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/admin/pages')}
                        className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 shadow-lg shadow-primary/30"
                    >
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Page Content (HTML)</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-[600px] p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="<p>Enter your HTML content here...</p>"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                        Tip: You can use HTML tags like &lt;h1&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;strong&gt; etc.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageEditor;
