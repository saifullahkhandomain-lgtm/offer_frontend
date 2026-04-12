const Loader = ({ text = 'Loading...', fullScreen = false, className = '' }) => {
    if (fullScreen) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="text-gray-500 mt-4">{text}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`text-center py-16 ${className}`}>
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
            <p className="text-gray-400 mt-3 text-sm">{text}</p>
        </div>
    );
};

export default Loader;
