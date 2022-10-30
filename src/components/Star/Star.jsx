function Star() {

    const setRating = (id) => {
        console.log('id', id)
        switch (id) {
            case '1':
                return rating = 1;
            case '2':
                return rating = 2;
            case '3':
                return rating = 3;
            case '4':
                return rating = 4;
            case '5':
                return rating = 5;
        }
    }


    return (
        <>
            <div className="rating">
                <span className="rating__result"></span>
                <i className="rating__star far fa-star" onClick={() => setRating(1)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(2)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(3)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(4)}></i>
                <i className="rating__star far fa-star" onClick={() => setRating(5)}></i>
            </div>
        </>
    )
}
export default Star;