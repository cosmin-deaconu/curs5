import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'
import CategoryList from '../components/CategoryList';
import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        this.setState({ category: products[categoryName] });
    }

    render() {
        return (
            <Layout>
                <div className="category-page container-fluid container-min-max-width">
                    <h2>{ this.state.category.name }</h2>
                    {
                        this.state.category.items 
                        ?
                        <CategoryList items={this.state.category.items}/>
                        :
                        null
                    }
                    
                </div>
            </Layout>
        );
    }
}

export default Category;