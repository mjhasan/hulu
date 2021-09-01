import Thumbnails from "./Thumbnails";

const Results = ({ data }) => {
    return (
        <div>
            {
                data.map((value, index) => <Thumbnails key={index} data={value} />)
            }
        </div>
    );
};

export default Results;