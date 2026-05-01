"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, ShieldAlert, HeartHandshake, Info } from 'lucide-react';

const faqCategories = [
  {
    title: '1. Selecting the Right Animal (The "Buyer\'s Guide")',
    icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
    items: [
      {
        q: 'How do I check the age of the animal online?',
        a: 'The "teeth" rule applies: 2 permanent teeth for a cow means it’s roughly 2 years old. Our product videos specifically show the animal’s mouth/teeth for verification so you can be confident in your choice.'
      },
      {
        q: 'What are the physical signs of a healthy animal?',
        a: 'Look for a wet/glossy nose, a bright and alert gaze, and a firm hump. Lethargic animals or those that appear constantly sluggish should be avoided.'
      },
      {
        q: 'What should I look for in the "Live Video" call?',
        a: 'Ask the farm manager to make the animal walk to check for any lameness. Also, ensure they show both sides of the body to check for hidden wounds or skin issues.'
      }
    ]
  },
  {
    title: '2. Shariah & Religious Guidelines',
    icon: <ShieldAlert className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        q: 'What makes an animal unfit for Qurbani?',
        a: 'The "Four Major Defects" make an animal unfit: Blindness (in one or both eyes), obvious sickness, obvious lameness, and extreme emaciation (being too thin or weak).'
      },
      {
        q: 'Can I share a large animal (Cow/Camel)?',
        a: 'Yes, the "7 Shares" rule applies. For a cow or camel, up to 7 people can contribute. A goat or sheep, however, is for 1 person only.'
      },
      {
        q: 'What are the rules for the person giving Qurbani?',
        a: 'It is a Sunnah to avoid cutting hair or nails from the 1st of Dhul Hijjah until the sacrifice is completed.'
      }
    ]
  },
  {
    title: '3. After the Animal Arrives (Care & Delivery)',
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    items: [
      {
        q: 'How should I feed the animal once it reaches my home?',
        a: 'Avoid sudden food changes. Stick to green grass and clean water. Overfeeding right before the sacrifice can cause bloating, so feed in moderation.'
      },
      {
        q: 'What do I do if the animal gets stressed during delivery?',
        a: 'Keep the animal in a cool, well-shaded area and allow it plenty of rest before the day of Eid. Avoid disturbing it unnecessarily.'
      },
      {
        q: 'How do I manage the waste?',
        a: 'Practice a "Green Qurbani." Keep bleaching powder and heavy-duty bags ready. Bury the waste or dispose of it responsibly in designated city corporation bins to maintain hygiene.'
      }
    ]
  }
];

const referenceData = [
  { q: 'Minimum Age?', a: 'Cow: 2 years; Goat/Sheep: 1 year.' },
  { q: 'Pregnancy?', a: 'It is not permissible to sacrifice a pregnant animal.' },
  { q: 'Injury?', a: 'Minor scratches are okay, but broken horns (from the root) or ears cut more than 1/3 make it unfit.' },
  { q: 'Best time to buy?', a: '5–7 days before Eid is best to let the animal settle in your environment.' }
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-3 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
      >
        <span className="font-medium text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`px-5 text-gray-600 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] py-4 border-t border-gray-100' : 'max-h-0 py-0'}`}
      >
        <p className="leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const QurbaniSection = () => {
  return (
    <section className="py-16 bg-gray-50/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Qurbani Tips & Guidelines
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about selecting, caring for, and fulfilling the requirements of your Qurbani animal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FAQ Accordions */}
          <div className="lg:col-span-2 space-y-8">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <AccordionItem key={itemIdx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Reference Table */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl shadow-sm border border-emerald-100 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-emerald-900">Quick Reference</h3>
              </div>
              
              <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-emerald-100/50">
                <table className="min-w-full divide-y divide-emerald-100">
                  <tbody className="divide-y divide-emerald-50">
                    {referenceData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'}>
                        <td className="px-4 py-4 text-sm font-semibold text-emerald-900 w-1/3 align-top">
                          {row.q}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700 w-2/3">
                          {row.a}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-sm text-emerald-700/80 italic text-center">
                Review these guidelines carefully to ensure a smooth and blessed Qurbani experience.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QurbaniSection;