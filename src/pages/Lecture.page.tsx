import {FC, memo} from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Lecture: FC<Props> = (props) => {
   //  const data = useParams();
  //  console.log(data);

  //  const data = useParams<any>();

  const {lectureNumber, batchNumber} = useParams<any>(); //no need to make a separate interface for defining type of data 
    return (
        <div>
            This is lecture page.
            Showing dataof lecture #{lectureNumber} of batch #{batchNumber}
        </div>
    );
};

Lecture.defaultProps = {};

export default memo(Lecture);