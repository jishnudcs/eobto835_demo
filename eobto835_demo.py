#!/bin/env python
from app import create_app

app = create_app(debug=True)

if __name__ == '__main__':
    app.run('172.27.13.44', 5000, debug=True)
