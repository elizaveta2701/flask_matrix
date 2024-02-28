# Импорт класса Flask из библиотеки Flask и функции render_template для рендеринга HTML-шаблонов
from flask import Flask, render_template  
# Импорт класса SQLAlchemy для работы с базами данных SQLAlchemy в приложении Flask
#from flask_sqlalchemy import SQLAlchemy  



# Создание экземпляра веб-приложения Flask с указанием текущего модуля в качестве имени
app = Flask(__name__)


# Декоратор для установки маршрута '/' для вызова функции index
@app.route('/')
def index():  
    # Функция для отображения главной страницы приложения
    return render_template('index.html') 


# Декоратор для установки маршрута '/' для вызова функции index
@app.route('/hw')
def hw():  
    # Функция для отображения главной страницы приложения
    return render_template('hw.html')   





# Условие для проверки, запущен ли этот скрипт напрямую
if __name__ == '__main__':  
    # Запуск веб-приложения Flask в режиме отладки
    app.run(debug=True)  
