#include<bits/stdc++.h>
#include<iostream>
using namespace std;
int main()
{

     map<int,set<string>> student;
     int n,i=0;
     cout<<"number of students - ";
     cin>>n;
     for(i;i<n;i++)
     {

         fflush(stdin);
         cout<<"name - ";
         string name;
         cin>>name;
         fflush(stdin);
         cout<<"marks - ";
         int marks;
         cin>>marks;
         student[marks].insert(name);
     }
     map<int,set<string>> :: iterator it = student.end();
     it--;
     for(it;it!=student.begin();it--)
     {

         for(auto  it1= ((*it).second).begin();it1!=((*it).second).end();it1++)
         {

             cout<<(*it1)<<" "<<(*it).first<<endl;
         }
     }
     for(auto it1= ((*it).second).begin();it1!=((*it).second).end();it1++)
         {

             cout<<(*it1)<<" "<<(*it).first<<endl;
         }
     return 0;
}
