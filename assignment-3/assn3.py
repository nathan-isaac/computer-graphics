__author__ = 'Nathan'

import sys
import random
from PySide import QtGui, QtCore
# import win32gui

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

        for i in range(40):
            x1 = random.randint(1, size.width()-100)
            y1 = random.randint(1, size.height()-100)

            w = random.randint(20, 100)
            h = random.randint(10, 100)

            qp.drawRect(x1, y1, w, h)

        self.floodFill4(qp, 20, 30, QtCore.Qt.white, QtCore.Qt.darkBlue)

        qp.end()

    def floodFill4(self, qp, x, y, old_color, new_color):


        # points = QtCore.QPoint(x,y)

        window = QtGui.QPainter.window()

        # pixCol = self.pixelIndex()

        # image = QtGui.QPixmap()


        if(new_color == old_color):
            qp.setPen(new_color)
            qp.drawPoint(x, y)
            self.floodFill4(qp, x, y-1, old_color, new_color)
            self.floodFill4(qp, x, y+1, old_color, new_color)
            self.floodFill4(qp, x-1, y, old_color, new_color)
            self.floodFill4(qp, x+1, y, old_color, new_color)

    # def get_pixel_colour(i_x, i_y):
    #     i_desktop_window_id = win32gui.GetDesktopWindow()
    #     i_desktop_window_dc = win32gui.GetWindowDC(i_desktop_window_id)
    #     long_colour = win32gui.GetPixel(i_desktop_window_dc, i_x, i_y)
    #     i_colour = int(long_colour)
    #     return (i_colour & 0xff), ((i_colour >> 8) & 0xff), ((i_colour >> 16) & 0xff)


def main():

    app = QtGui.QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()