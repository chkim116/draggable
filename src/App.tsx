import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
`;

const Draggable = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    border: 1px solid #dbdbdb;
`;

const Box = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffc397;
    text-align: center;
    line-height: 50px;
`;

const Empty = styled.div`
    display: flex;
    width: 300px;
    height: 300px;
    border: 1px solid #dbdbdb;
`;

function App() {
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("드래그 시작");
        const { id } = e.currentTarget;
        e.dataTransfer.setData("div", id);
    };

    const onDrag = () => {
        console.log("드래그 중");
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("드래그 끝!");
        e.preventDefault();
        const data = e.dataTransfer.getData("div");
        const dragged = document.getElementById(data);
        (e.target as HTMLElement).appendChild(dragged as HTMLElement);
    };

    const onAllowDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <Container>
            <Draggable onDrop={onDrop} onDragOver={onAllowDrop}>
                <Box
                    id="box"
                    draggable="true"
                    onDrag={onDrag}
                    onDragStart={onDragStart}>
                    drag!
                </Box>
                <Box
                    id="box2"
                    draggable="true"
                    onDrag={onDrag}
                    onDragStart={onDragStart}>
                    drag!
                </Box>
            </Draggable>
            <Empty
                onDrop={onDrop}
                onDrag={onDrag}
                onDragOver={onAllowDrop}></Empty>
        </Container>
    );
}

export default App;
