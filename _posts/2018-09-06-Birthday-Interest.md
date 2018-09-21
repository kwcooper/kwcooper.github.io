---
layout: post
title: Birthday Interest
---

### Back story
You’re asked what you want for your birthday. You could say an iPhone or a new pair of socks, but you care about your money so instead you ask for something a bit less tangible. What if you could have 1%, that is one percent added to your interest every year on your birthday. How much money would you have?  


We thought of this sitting at work, a co-worker and I were talking about interest, and somehow it was brought up about what you happen if the interest was your age. I thought this would be interesting to see, so I coded it up. 


![_config.yml]({{ site.baseurl }}/images/birthdayInterest/1dollar_100years.png){: .center-image }
You can see that it is an exellent case of an exponental function

![_config.yml]({{ site.baseurl }}/images/birthdayInterest/1dollar_60years.png){: .center-image }



### Code
The is the code I used to simulate the different parameters, as well as generate the figure. 

{% highlight python %}
import matplotlib.pyplot as plt

p = 1000
y = 30

tL,t = [p],p
for i in range(1,y):
    t += (t * (i / 100))
    tL.append(t)

print('Started with {}, lived for {} years with interest as your age...'.format(p,y))
print('You now would have {}'.format(t))

plt.plot(range(1,len(tL)+1),tL)
plt.title('Interest = Age')
plt.xlabel('Age (Years)')
plt.ylabel('Net Worth of Initial Investment')
plt.show()
{% endhighlight %}

