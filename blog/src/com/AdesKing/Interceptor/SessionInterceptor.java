package com.AdesKing.Interceptor;

import java.util.Map;


import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class SessionInterceptor implements Interceptor {

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void init() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String intercept(ActionInvocation actionInvocation) throws Exception {
		Map<String,Object> session=actionInvocation.getInvocationContext().getSession();
		String user= (String) session.get("login");
		if(user==null){
			return Action.INPUT;
		}else{
		      return actionInvocation.invoke();  
		}
	}

}
