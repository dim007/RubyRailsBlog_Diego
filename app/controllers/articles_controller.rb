class ArticlesController < ApplicationController
    ## Add Authetication to prevent user/viewer access to Create & Delete & Edit
    ## Password on Github is different that real web domain password 
    http_basic_authenticate_with name: ENV['MASTER_USER'], password: ENV['MASTER_USER_PASSWORD'], except:
    [:index, :show]

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
        ## This line calls the private function instead
        @article = Article.new(article_params)
        if @article.save
            redirect_to @article
        else
            render 'new' 
            ## 'render' here allows for 'article' obj to still exist
            ## 'render' also prevents browser from issueing another request
        end

        ## This displays the paramerters from the incoming form to page
        #render plain: params[:article].inspect
    end
    ## Saves editted article, checks requirements first.
    def update
        @article = Article.find(params[:id])
        if @article.update(article_params)
            redirect_to @article
            ## Redirects to updated article post
        else
            render 'edit'
            ## Renders the same screen, with errors listed
        end
    end
    ## Finds article given params, then deletes it, No new view needed
    def destroy
        @article = Article.find(params[:id])
        @article.destroy
        redirect_to articles_path
    end
    private
        ## Private function that returns allowed params for Article
        def article_params
            params.require(:article).permit(:title, :cardText, :text, :picture, :textMid, :textBott, :pictureMid, :pictureBott);
        end

end
