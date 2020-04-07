import React from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';
import products from '../utils/products.json';

class Home extends React.Component{

    constructor(){
        super();
        this.state ={
            categories: []
        }
    }

    componentDidMount(){
        const categoriesName = Object.keys(products);
        this.setState({categories: categoriesName});
    }

    render() {
        const{ signOut, user } = this.props;
        return (
            <div>
                <Layout signOut={signOut} user={user}> 
                    <div className="container-fluid container-min-max-width">
                        <div className="row">
                            {this.state.categories.map((c, index) => {
                                    return<HomeCategory 
                                        image={products[c].image}
                                        name={products[c].name}
                                        description={products[c].description}
                                        key={index}
                                        route={c}
                                    />
                                }) 
                            }
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
    
}

export default Home;