package com.grini.ecommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.grini.ecommerce.entity.Product;
import com.grini.ecommerce.entity.ProductCategory;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		
		HttpMethod[] theUnsportedAction = {HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PUT};
		
		// disable http method for product : PUT , POST , DELETE
		
		config.getExposureConfiguration()
		.forDomainType(Product.class)
		.withItemExposure((metdata, HttpMethod) -> HttpMethod.disable(theUnsportedAction))
		.withCollectionExposure((metdata, HttpMethod) -> HttpMethod.disable(theUnsportedAction));
		
		// disable http method for productCategory : PUT , POST , DELETE
					
		config.getExposureConfiguration()
		.forDomainType(ProductCategory.class)
		.withItemExposure((metdata, HttpMethod) -> HttpMethod.disable(theUnsportedAction))
		.withCollectionExposure((metdata, HttpMethod) -> HttpMethod.disable(theUnsportedAction));		
		
	}

	
	
}
