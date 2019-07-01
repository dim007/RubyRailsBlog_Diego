class AboutPageController < ApplicationController
    http_basic_authenticate_with name: ENV['MASTER_USER'], password: ENV['MASTER_USER_PASSWORD'], except:
    [:index, :show]
    def index
        @aboutpages = AboutPage.all
    end
    def show
        @aboutpage = AboutPage.find(params[:id])
    end
    def new
        @aboutpage = AboutPage.new
    end
    def edit
        @aboutpage = AboutPage.find(params[:id])
    end
    def create
        @aboutpage = AboutPage.new(aboutpage_params)
        if @aboutpage.save
            redirect_to @aboutpage
        else
            render 'new' 
        end
    end
    def update
        @aboutpage = AboutPage.find(params[:id])
        if @aboutpage.update(aboutpage_params)
            redirect_to @aboutpage
        else
            render 'edit'
        end
    end
    def destroy
        @aboutpage = AboutPage.find(params[:id])
        @aboutpage.destroy
        redirect_to about_page_index_path
    end
    private
        def aboutpage_params
            params.require(:about_page).permit(:title, :text);
        end
end
