import EditorContainer from '../containers/write/EditorContainer';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';
import WriteActionButtons from '../components/write/WriteActionButton';

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBox />
            <WriteActionButtons />
        </Responsive>
    );
};

export default WritePage;