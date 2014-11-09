/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package de.fhg.fokus.openride.helperclasses;
import java.sql.*;
/**
 *
 * @author Ido
 */
public class SQLHelper {

        private String connectionString = "";//Add connection string
        private static boolean exist = false;
        private static SQLHelper Instance;

    private SQLHelper(){
        Instance=this;
    }
public boolean writeToDB(String s){
    Connection conn=null;
    try {
        Class.forName("com.mysql.jdbc.Driver");
        conn = DriverManager.getConnection(connectionString);
        Statement stmt = conn.createStatement();
        stmt.executeUpdate(s);
    }
    catch (Exception ex){
        return false;
    }
    finally{
        try{
        if (conn!=null)
            conn.close();
        }
        catch (Exception ex){
            return false;
        }
    }
    return true;
}
public static SQLHelper getLogger(){
    if (!exist){
        exist=true;
        return new SQLHelper();
    }
    return Instance;
}
}
