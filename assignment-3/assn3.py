__author__ = 'Nathan'

import sys
import random
from PySide import QtGui, QtCore

class Example(QtGui.QWidget):

    def __init__(self):
        super(Example, self).__init__()

        self.initUI()

    def initUI(self):

        self.setGeometry(100, 100, 800, 500)
        self.setWindowTitle('Assignment 3')
        self.show()

    def paintEvent(self, e):

        qp = QtGui.QPainter()
        qp.begin(self)

        size = self.size()

        for i in range(20):
            x1 = random.randint(1, size.width()-100)
            y1 = random.randint(1, size.height()-100)

            w = random.randint(1, 100)
            h = random.randint(1, 100)

            qp.drawRect(x1, y1, w, h)

        # qp.fillRect(100, 100, 10, 10, QtCore.Qt.red)

        # for i in range(21):
        #
        #     m = i / 0.05
        #
        #     y = round(m) * i
        #
        #     x1 = 0
        #     y1 = 0
        #
        #     x2 = y
        #     y2 = 500
        #
        #     self.dda(qp, x1, y1, x2, y2)

        qp.end()

    def plot(self, qp, x, y):
        qp.setPen(QtCore.Qt.black)
        qp.drawPoint(x, y)

    def dda(self, qp, x1, y1, x2, y2):

        dx = x2 - x1
        dy = y2 - y1

        if dx > dy:
            steps = dx
        else:
            steps = dy

        xincre = dx/steps
        yincre = dy/steps

        x = x1
        y = y1

        self.plot(qp, x, y)

        for i in range(steps):
            x = x + xincre
            y = y + yincre
            self.plot(qp, round(x), round(y))

    # def floodFill4(self, x, y, oldColor, newColor):
    #
    #     if(getpixel(x,y) == oldColor):
    #         putpixel(x, y, newColor)



def main():

    app = QtGui.QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()