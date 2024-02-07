
// import { useEffect } from "react"
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import Notable from './Notable'
// import topLeft from '../images/skincare-and-makeup-masterclass-16103245.jpg'
// import topRight from '../images/tp-best-natural-makeup-looks-1.jpg'
// import bottomRight from '../images/headerImage.jpg'
// import bottomLeft from '../images/Danessa-1-1551x1000.jpg'

const HomePage = () => {
    // const [temp, setTemp] = useState([])
    // const [errorAPI, setErrorAPI] = useState('')
    // useEffect(() => {
    //     axios({
    //         url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
    //         params: {
    //             product_tags: 'Vegan',
    //             price_less_than: 5,
    //             rating_greater_than: 4.3
    //         }
    //     }).then(response => {
    //         setTemp(response.data)
    //     }).catch((error) => {
    //         if (error.response) {
    //             setErrorAPI('Sorry our API is unable to get the necessary information!')
    //         }
    //     })
    // }, [])

    return (
        <main>
            <div className="headerContainer">
                {/* <div className="ApiError">{errorAPI}</div> */}
                <section className="header">
                    <h1>Makeup for the Ethically Conscious</h1>
                    <p>Sustainable and eco-friendly friendly makeup to achieve sustainable beauty.</p>
                    {/* <Link to="catalogue">
                     <button>Shop</button>
                    </Link> */}
                </section>
                <div className="overlay2"></div>
            </div>
        </main>
    )
}

export default HomePage

