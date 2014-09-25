package uk.co.pa.config;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

public class SprintBoardApplication  extends ResourceConfig  {
	public SprintBoardApplication() {
        packages("uk.co.pa.models");
        register(JacksonFeature.class);
   }
} 

