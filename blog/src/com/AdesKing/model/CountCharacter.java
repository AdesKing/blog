package com.AdesKing.model;

import java.util.HashMap;
import java.util.Map;

public class CountCharacter {
	
		
		public static void main(String[] args) {		
			int count = 1;		
			String str = "www123我各www123我各";		
			char [] st = str.toCharArray();
		  	
			//利用HashMap来存储给定字符串的各个字符-个数的键值对
			Map<Character, Integer> string = new HashMap<Character, Integer>();		
			//计算给定字符串中各个字符的个数
			for (int i = 0; i < st.length; i++) {
				boolean value = string.containsKey(new Character(st[i]));
				if (!value) {				
					string.put(new Character(st[i]), count);
					
				} else {				
					int num = string.get(new Character(st[i])).intValue();
					num++;
					string.put(new Character(st[i]), num);
				}
			}
			
			//打印输出map中各个字符和其个数 
			for (Map.Entry<Character, Integer> entry : string.entrySet()) {  
				Character key = entry.getKey(); 
				
				Integer value = entry.getValue();  
	            System.out.println(key.getClass()+"==这个字符为：" + key + ", 它的个数为：" + value + "");  
	        }		
		}
	}

