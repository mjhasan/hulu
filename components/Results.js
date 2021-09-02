import FlipMove from 'react-flip-move';
import Thumbnails from "./Thumbnails";

const Results = ({ data }) => {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                {
                    data.map((value, index) => <Thumbnails key={index} data={value} />)
                }
        </FlipMove>
    );
};

export default Results;