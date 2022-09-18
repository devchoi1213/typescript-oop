{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    // 기존의 타입에서 원하는 부분만 골라서 제한적인 타입을 만들고 싶은 경우 사용
    type VideoMetaData = Pick<Video, 'title' | 'id'>;

    function getVideoMetaData(id: string): Pick<Video, 'id' | 'title'> {
        return {
            id,
            title: 'title'
        }
    }
}