<?php
use SeoTracker\SeoCore\Adapter\Crawler\SymfonyCrawler;
use SeoTracker\SeoCore\Adapter\Scrapper\CurlScrapper;
use SeoTracker\SeoCore\Model\GoogleFranceEngine;

$crawler   = new SymfonyCrawler();
$scrapper = new CurlScrapper();
$googleEngine = new GoogleFranceEngine($scrapper, $crawler);

$website = $googleEngine->getWebsite('http://seo-tracker.net');

// position of website in Google
$position = $googleEngine->getPosition('seo tools online platform', $website); // 1

// title of website
$title = $website->getTitle(); // 'SeoTracker : A SEO tools suite'

// metas of website
$metas = $googleEngine->getMetas();
// ['description' => 'Seo Tracker est une plateforme de suivi et d'optimisation [..]']

// microdatas of website
$microDatas = $googleEngine->getMicroDatas();
/**
 * [0 =>
 *     'type' =>
 *         [0 => 'http://www.schema.org/CreativeWork']
 *     ,
 *     'properties' => [...]]
 * ],
 * [ 1 => [..] ]
 **/

// backlinks of website location in search engine
$backlinks = $googleEngine->getBacklinks($website);
/**
 * [
 *     0 => 'http://seo-core.com',
 *     1 => 'http://otherwebsite.backlink'
 * ]
 **/
 