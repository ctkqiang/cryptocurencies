######################################
## usr/bin/env python#################
## This Is Bitcoin Price Prediction###
## Developed by John Melody Melissa###
######################################

import csv
import numpy as np
from sklearn.svm import svr
import matplotlib.pyplot as pyplot

#plt.switch_backend('new_backend')

dates = []
prices = []

def get_data(filename):
    with open(filename, 'r') as csvfile:
        csvFileReader = csv.reader(csvfile)
        next(csvFileReader)
        for row in csvFileReader:
            dates.append (int(row[0].split('-')[0]))
            prices.append(float(row)[1]))
    return

def predict_prices(dates, prices, x):
    dates = np.reshape(dates,(len(dates), 1))

    svr_len = SVR(kernal= 'linear', c=1e3)
    svr_poly = SVR(kernal= 'poly', c=1e3, degree = 2)
    svr_rbf = SVR(kernal= 'rbf', c=1e3, gamma=0.1)
    svr_lin.fit(dates, prices)
    svr_poly.fit(dates, prices)
    svr_rbf.fit(dates, prices)

    plt.scatter(dates, prices, color='black', label='Data')
    plt.plot(dates, svr_rbf.predict(dates), color= 'red', label='RBF model')
    plt.plot(dates, svr_lin.predict(dates), color= 'green' label='Linear model')
    plt.plot(dates, svr_poly.predict(dates), color='blue' label='Polynomial model')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.title('Cryptocurrencies(BTC) Price Prediction')
    plt.legend()
    plt.show()

    return svr_rbf.predict(x)[0], svr_lin.predict(x)[0], svr_poly.predict(x)[0]

get_data('btc.csv')

predicted_price = predict_price(dates, prices,29)

print(predicted_price)
