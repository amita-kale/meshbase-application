import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  /**
   * Used to get title of component
   * @param {string} titleFor
   * @returns title
   */
  getTitle(titleFor: string): string {
    let title = '';
    switch (titleFor) {
      case 'angular':
        title = 'angular information';
        break;

      case 'javascript':
        title = 'javascript information';
        break;

      case 'nodejs':
        title = 'node js information';
        break;

      default:
        break;
    }
    return title;
  }

  /**
   * this is used to get angular details
   * @returns angular details
   */
  getAngularDetails(): { label: string; content: string } {
    const information = {
      label: 'angular details',
      content: `What is Angular?
      Angular is a development platform, built on TypeScript. As a platform, Angular includes:
        A component-based framework for building scalable web applications
        A collection of well-integrated libraries that cover a wide variety of features,
        including routing, forms management, client-server communication, and more
        A suite of developer tools to help you develop, build, test, and update your code
        With Angular, you're taking advantage of a platform that can scale
        from single-developer projects to enterprise-level applications.
        Angular is designed to make updating as straightforward as possible,
        so take advantage of the latest developments with a minimum of effort.`,
    };
    return information;
  }

  /**
   * this is used to get javascript details
   * @returns javascript details
   */
  getJavascriptDetails(): { label: string; content: string } {
    const information = {
      label: 'javascript details',
      content: `What is JavaScript?
      JavaScript is a cross-platform, object-oriented scripting language used to make
      webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.).
      There are also more advanced server side versions of JavaScript such as Node.js,
      which allow you to add more functionality to a website than downloading files
      (such as realtime collaboration between multiple computers).
      Inside a host environment (for example, a web browser),
      JavaScript can be connected to the objects of its environment to provide programmatic control over them.

      JavaScript contains a standard library of objects,
      such as Array, Date, and Math,
      and a core set of language elements such as operators, control structures, and statements.`,
    };
    return information;
  }

  /**
   * this is used to get nodejs details
   * @returns nodejs details
   */
  getNodejsDetails(): { label: string; content: string } {
    const information = {
      label: 'node js details',
      content: `What is nodejs?
        Node.js is an open-source and cross-platform JavaScript runtime environment.
        It is a popular tool for almost any kind of project!
        Node.js runs the V8 JavaScript engine, the core of Google Chrome,
        outside of the browser. This allows Node.js to be very performant.
        A Node.js app runs in a single process,
        without creating a new thread for every request. Node.js provides a set of
        asynchronous I/O primitives in its standard library
        that prevent JavaScript code from blocking and generally,
        libraries in Node.js are written using non-blocking paradigms,
        making blocking behavior the exception rather than the norm.`,
    };
    return information;
  }
}
