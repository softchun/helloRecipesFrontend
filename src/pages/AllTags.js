import React from 'react';
import Tag from '../components/Tag';
import MOCK_DATA_TAGS from '../MOCK_DATA_TAGS'

function AllTags(){

    const tags = MOCK_DATA_TAGS.data.allTags;

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes/tags`)
    //     .then((res) => {
    //         setRecipe(res.data.allTags);
    //     })
    // }, []);

    return(
        <div style={{ marginBottom: 30 }}>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <h1>All Tags</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'inline-flex', flexWrap: 'wrap', margin: 'auto', width: '90%', justifyContent: 'center' }}>
                    {tags && tags.map(obj => {
                        return (
                            <Tag tag={obj} key={obj.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllTags
