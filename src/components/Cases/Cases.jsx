
function Cases(props) {
    
    return (
        <section className="cases">
            <div className="cases__container _container">
                <div className="cases__list">
                    <div className="cases__item">{props.upper}</div>
                    {props.list.map((e, i) => {
                        return (
                            <div key={i} className="cases__item">
                                <div className="cases__item-title">{e.title}</div>
                                <div className="cases__item-company">{e.company}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Cases;