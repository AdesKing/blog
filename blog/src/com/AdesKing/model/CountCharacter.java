package com.AdesKing.model;

import java.util.HashMap;
import java.util.Map;

public class CountCharacter {
	
		
		public static void main(String[] args) {		
			int count = 1;		
			String str = "www123�Ҹ�www123�Ҹ�";		
			char [] st = str.toCharArray();
		  	
			//����HashMap���洢�����ַ����ĸ����ַ�-�����ļ�ֵ��
			Map<Character, Integer> string = new HashMap<Character, Integer>();		
			//��������ַ����и����ַ��ĸ���
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
			
			//��ӡ���map�и����ַ�������� 
			for (Map.Entry<Character, Integer> entry : string.entrySet()) {  
				Character key = entry.getKey(); 
				
				Integer value = entry.getValue();  
	            System.out.println(key.getClass()+"==����ַ�Ϊ��" + key + ", ���ĸ���Ϊ��" + value + "");  
	        }		
		}
	}

