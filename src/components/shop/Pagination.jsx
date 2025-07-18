const Pagination = ({ totalPage, currentPage, handlePageChange }) => {
    return (
        <div className="flex justify-center gap-4 my-4">
            {Array.from({ length: totalPage }, (_, i) => (
                <button
                    key={i}
                    onClick={() => handlePageChange(i+1)}
                    className={`px-3 py-1 font-medium rounded cursor-pointer ${currentPage === i + 1 ? "bg-secondary text-white" : "bg-gray-200"}`}>
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;