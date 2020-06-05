import React, { Component } from 'react';
import Back from '../commons.js';
import '../commons.css';
import './index.css';

class ReadingList extends Component {
  render() {
    return (
      <div>
        <Back />
        <div className="Center-content-div">
          <p className="About">This page is intended primarily as a way for me to better keep track of what I have read and what I wish to read. I will record only what informs my understanding of how to best live my life. If it is here (and marked as read), it means a lot to me, and I would love to discuss it for hours on end (and you should feel free to get in touch with me for that).</p>
          <p> </p>

          <p className="List-title">Currently Reading</p>
          <ul className="List-item" style={{listStyleType:"circle"}}>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Society_of_Mind">The Society of Mind</a> (Minsky)</li>
            <li><a className="List-item" href="https://onlinelibrary.wiley.com/doi/full/10.1111/cogs.12148">Parallel Distributed Processing at 25: Further Explorations in the Microstructure of Cognition</a> (McClelland, Rogers)</li>
            <li><a className="List-item" href="https://www.newyorker.com/magazine/2018/04/02/the-mind-expanding-ideas-of-andy-clark">The Mind-Expanding Ideas of Andy Clark</a> (MacFarquhar, for <cite>The New Yorker</cite>)</li>
          </ul>

          <p className="List-title">Read</p>
          <ul className="List-item" style={{listStyleType:"circle"}}>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/How_to_Create_a_Mind">How to Create a Mind: The Secret of Human Thought Revealed</a> (Kurzweil)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/What_I_Believe#Russell's_essay_(1925)">What I Believe</a> (Russell)</li>
            <li><a className="List-item" href="https://books.google.com.br/books/about/Crystal_Nights_and_Other_Stories.html?id=vzIrAQAAIAAJ&source=kp_book_description&redir_esc=y">Crystal Nights and Other Stories</a> (Egan)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind">Sapiens: A Brief History of Humankind</a> (Harari)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Life_3.0">Life 3.0: Being Human in the Age of Artificial Intelligence</a> (Tegmark)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies">Superintelligence: Paths, Dangers, Strategies</a> (Bostrom)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Siddhartha_(novel)">Siddhartha</a> (Hesse)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Immortality_(novel)">Immortality</a> (Kundera)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/East_of_Eden_(novel)">East of Eden</a> (Steinbeck)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude">One Hundred Years of Solitude</a> (Marquez)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance">Zen and the Art of Motorcycle Maintenance</a> (Pirsig)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Poor_Economics">Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty</a> (Banerjee, Duflo)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/The_Tao_of_Pooh">The Tao of Pooh</a> (Hoff)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Tractatus_Logico-Philosophicus">Tractatus Logico-Philosophicus</a> (Wittgenstein)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/The_Way_of_Zen">The Way of Zen</a> (Watts)</li>
            <li><a className="List-item" href="https://books.google.com.br/books/about/Remembering_The_Manhattan_Project_Perspe.html?id=OfXICgAAQBAJ&source=kp_book_description&redir_esc=y">Remembering the Manhattan Project - Perspectives on the Making of the Atomic Bomb & its Legacy</a> (Kelly)</li>
            <li><a className="List-item" href="https://www.huffingtonpost.com/johann-hari/the-real-cause-of-addicti_b_6506936.html">The Likely Cause of Addiction Has Been Discovered, and It Is Not What You Think</a> (Hari, for the <cite>Huffington Post</cite>)</li>
            <li><a className="List-item" href="https://www.wired.com/story/karl-friston-free-energy-principle-artificial-intelligence/">The Genius Neuroscientist Who Might Hold the Key to True AI</a> (Raviv, for <cite>Wired</cite>)</li>
          </ul>

          <p className="List-title">Not-yet-read</p>
          <ul className="List-item" style={{listStyleType:"circle"}}>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Connectome_(book)">Connectome: How the Brain's Wiring Makes Us Who We Are</a> (Seung)</li>
            <li><a className="List-item" href="https://books.google.com.br/books/about/Consciousness.html?id=7KvznQEACAAJ&source=kp_book_description&redir_esc=y">Consciousness: Confessions of a Romantic Reductionist</a> (Koch)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/On_Intelligence">On Intelligence: How a New Understanding of the Brain will Lead to the Creation of Truly Intelligent Machines</a> (Hawkins)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Consciousness_and_the_Brain">Consciousness and the Brain: Deciphering How the Brain Codes our Thoughts</a> (Dehaene)</li>
            <li><a className="List-item" href="https://books.google.com.br/books/about/The_Book_of_why.html?id=tEM2uwEACAAJ&source=kp_book_description&redir_esc=y">The Book of Why</a> (Pearl)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/Homo_Deus:_A_Brief_History_of_Tomorrow">Homo Deus: A Brief History of Tomorrow</a> (Harari)</li>
            <li><a className="List-item" href="https://en.wikipedia.org/wiki/The_Computer_and_the_Brain">The Computer and the Brain</a> (von Neumann)</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default ReadingList;
