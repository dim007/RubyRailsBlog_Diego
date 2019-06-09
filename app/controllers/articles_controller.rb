class ArticlesController < ApplicationController
    def index
        @articles = Article.all
    end
    def show
        @article = Article.find(params[:id]);
    end
    def new
        @article = Article.new
    end
    def edit
        @article = Article.find(params[:id])
    end
    def create
        # Did not work, params in ruby are strong params, need explicit permission
        #@article = Article.new(params[:article])
        # This is a one line fix, moved to function call article_params
        #@article = Article.new(params.require(:article).permit(:title, :text))
        
        # This line calls the private function instead
        @article = Article.new(article_params)
         
        # Added validation to article in 'model', must confirm valid 
        #@article.save
        #redirect_to @article
        if @article.save
            redirect_to @article
        else
            render 'new' 
            # 'render' here allows for 'article' obj to still exist
            # 'render' also prevents browser from issueing another request
        end

        #This displays the paramerters from the incoming form to page
        #render plain: params[:article].inspect
    end
    def update
        @article = Article.find(params[:id])
        if @article.update(article_params)
            redirect_to @article
        else
            render 'edit'
        end
    end
    private
        # Private function that returns allowed params for Article
        def article_params
            params.require(:article).permit(:title, :text)
        end
end
