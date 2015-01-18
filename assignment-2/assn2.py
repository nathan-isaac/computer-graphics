__author__ = 'Nathan'

import sys
from PySide import QtGui, QtCore

class Example(QtGui.QWidget):

    def __init__(self):
        super(Example, self).__init__()

        self.initUI()

    def initUI(self):

        self.setGeometry(100, 100, 800, 500)
        self.setWindowTitle('Assignment 2: Line')
        self.show()

    def paintEvent(self, e):

        qp = QtGui.QPainter()
        qp.begin(self)

        for i in range(21):

            m = i / 0.05

            y = round(m) * i

            x1 = 0
            y1 = 0

            x2 = y
            y2 = 500

            self.dda(qp, x1, y1, x2, y2)

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


def main():

    app = QtGui.QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()