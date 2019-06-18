class CommentsController < ApplicationController
    ## Prevent user/viewer access to Comment Destroy function
    ## Password on Github is different that real web domain password 
    http_basic_authenticate_with name: "admin", password: "password", only:
    :destroy
    def create
        @article = Article.find(params[:article_id])
        ## @article.comments.create - takes advantage of association
        @comment = @article.comments.create(comment_params)
        ## redirect back to article with comment
        redirect_to article_path(@article)
    end
    ## Removes associated comment
    def destroy
        @article = Article.find(params[:article_id])
        @comment = @article.comments.find(params[:id])
        @comment.destroy
        redirect_to article_path(@article)
    end
    private
        ## Allow only the parameters :commenter, :body for comment obj in db
        def comment_params
            params.require(:comment).permit(:commenter, :body)
        end
end
