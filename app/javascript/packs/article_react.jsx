//<%= javascript_pack_tag 'article_react' %>
import React from 'react'
import ReactDOM from 'react-dom'
import ArticleCard from '../components/ArticleCard'
//TODO: Pass data from Rails to React
  class ArticleCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
        this.populate(props.articles)
    }
    render() {
      return (
        <div>{this.state.cards}</div>
      );
    }
    populate(pop_props) {
        const elemenets = pop_props.articles.map((article) => 
          <ArticleCard title={article.title} body={article.body} />  
        );
        this.setState({
            cards: elements
        });
    }
    addArticle(cardprops) {
        return(
            this.setState(function(state,cardprops) {
                return {
                    cards: [state.cards, <ArticleCard title={cardprops.title} body={cardprops.body} />]
                };
            })
        );
    }
  };

  //TODO: Pass in data from rails to react.
  // For now using react_component helper function
  document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('root1')
    const data = JSON.parse(node.getAttribute('data'))
    ReactDOM.render(
      <ArticleCards articles={data}/>,
      document.body.appendChild(document.createElement('div')),
    )
  })