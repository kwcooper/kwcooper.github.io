---
layout: post
title: From Noise to Signal
---

### Ephys Data Analysis
One of the first questions that I had when first starting to analyze ephys data was how do you go from the noisy recording to something meaningful (and of course by meaningful I mean pretty). 


In my field, where we study specific oscillatory frequencies, it may be a bit obscure how this is accomplished. I wrote a quick Matlab script to demonstrate one method to parse the data from the raw signal, all the way up to more useful parts, that is the phase of the oscillation, as well as the signals amplitude. You can see the change in the wave in the figure below:

![_config.yml]({{ site.baseurl }}/images/phaseAmpExtraction.jpg){: .center-image }

The steps are fairly straightforward:

1.Filter the raw signal for your desired frequency. I chose a wide theta band (4-12Hz) because that’s what I study.

2.Next, take the [Hilbert transform](http://www.scholarpedia.org/article/Hilbert_transform_for_brain_waves) of the signal. The Hilbert is similar to the Fourier, but is more commonly used due to some of its beneficial properties for our data type. 

3.Next, compute the phase [angle](https://www.mathworks.com/help/matlab/ref/angle.html) of the transform, effectively splitting the imaginary and real parts. This gives you the phase of the theta wave from -\pi to \pi

4.Optionaly, take the absolute value of the transform, which will give you the amplitude, (which can be likened to power) of the frequency band


### Code
This is the code I used to generate the figure. 

(Requires the Matlab signal analysis package)


{% highlight matlab %}
thetarange = [4 12];
D = dataTimeSeries; % should be an array
DSamp = D(1,1:1000); fs = 500;
figure; subplot(5,1,1); plot(DSamp); title('Original Data (1000 dp/ 2s)');

filtSig = buttfilt(DSamp,thetarange,fs,'bandpass',3);
subplot(5,1,2); plot(filtSig); title('Filtered Data 4-12Hz');

% Take the Hilbert Transform of the filtered signal 
hilbSig = hilbert(filtSig);
subplot(5,1,3); plot(hilbSig); title('Hilbert Transform');

% Return the phase angle of the complex array in radians 
thetaPhs = angle(hilbSig)';
subplot(5,1,4); plot(thetaPhs); title('Theta Phase');

thetaAmp = abs(hilbSig)';
subplot(5,1,5); plot(thetaAmp); title('Theta Amplitude');
{% endhighlight %}

