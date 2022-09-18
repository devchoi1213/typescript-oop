{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    let test :Exclude<Video, 'id'>;
    test = {
        id: 'string',
        title: 'string',
        url: 'string',
        data: 'string',
    }

    console.log(test)

    // 기존의 타입에서 원하는 빼서 제한적인 타입을 만들고 싶은 경우 사용
    type VideoMetaData = Omit<Video, 'url' | 'data'>;

    function getVideoMetaData(id: string): VideoMetaData {
        return {
            id,
            title: 'title'
        }
    }
}