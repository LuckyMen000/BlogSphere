class ArticleModel {
    constructor() {
        this.articles = [];
    }

    addArticle(title, content) {
        this.articles.push({ title, content });
    }

    getArticles() {
        return this.articles;
    }
}

class ArticleView {
    constructor() {
        this.controller = null;
    }

    setController(controller) {
        this.controller = controller;
    }

    displayArticles(articles) {
        console.log("Displaying articles:");
        articles.forEach((article, index) => {
            console.log(`${index + 1}: ${article.title} - ${article.content}`);
        });
    }
}

class ArticleController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.setController(this);
    }

    addArticle(title, content) {
        this.model.addArticle(title, content);
        this.updateView();
    }

    updateView() {
        this.view.displayArticles(this.model.getArticles());
    }
}

const model = new ArticleModel();
const view = new ArticleView();
const controller = new ArticleController(model, view);

controller.addArticle("First Article", "This is the first article content.");
controller.addArticle("Second Article", "This is the second article content.");
