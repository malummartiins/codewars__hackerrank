import java.applet.*;
import java.awt.*;
import java.awt.event.*;

//<applet code = KeyEvents hight = 500 width = 500></applet>

public class KeyEvents extends applet implements KeyListener {
    

    String msg;

    
    public void init (){
        addkeyListener(this);
    }
    @Override
    public void keyPressed(KeyEvent e) {
        // TODO Auto-generated method stub
        msg = "KEY PRESSE";
        showStatus ("key pressed");
        repaint();
        
    }
    @Override
    public void keyReleased(KeyEvent e) {
        // TODO Auto-generated method stub
        
    }
    @Override
    public void keyTyped(KeyEvent e) {
        // TODO Auto-generated method stub

        
    }
    public void paint (Graphics g){
        g.drawString(msg,10,40);
    }

}
