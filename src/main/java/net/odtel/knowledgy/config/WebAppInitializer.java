package net.odtel.knowledgy.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses () {
        return new Class<?>[] {RootContextConfig.class, DevelopmentConfiguration.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses () {
        return new Class<?>[]{ServletContextConfig.class};
    }

    @Override
    protected String[] getServletMappings () {
        return new String[]{"/"};
    }
}
