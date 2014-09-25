package uk.co.pa.dao;
import uk.co.pa.models.Comment;
import uk.co.pa.models.SprintBoard;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;


public class OfyService {
    static {
        ObjectifyService.register(Comment.class);
        ObjectifyService.register(SprintBoard.class);
    }

    public static Objectify ofy() {
        return ObjectifyService.ofy();//prior to v.4.0 use .begin() , 
                                        //since v.4.0  use ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }

}